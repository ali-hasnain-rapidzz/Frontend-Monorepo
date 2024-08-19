import { Schema, Types } from 'mongoose';

// Middleware to automatically exclude soft-deleted documents
const excludeDeletedMiddleware = function (this: any, next: () => void) {
  this.where({ isDeleted: { $ne: true } });
  next();
};

// Middleware to filter out soft-deleted documents after population
const filterDeletedAfterPopulate = function (result: any) {
  if (Array.isArray(result)) {
    result = result.filter((doc: any) => !doc.isDeleted);
  } else if (result && result.isDeleted) {
    result = null;
  }
  return result;
};

// Utility function to update references
const removeReferences = async function (doc: any) {
  // Define the schema paths that contain references to this document
  const pathsToCheck: { model: string; path: string; array?: boolean }[] = [
    { model: 'Users', path: 'manages' },
  ];

  for (const pathInfo of pathsToCheck) {
    const { model, path, array } = pathInfo;
    const refModel = doc.model(model);

    if (array) {
      // Handle array fields
      await refModel.updateMany(
        { [path]: doc._id },
        { $pull: { [path]: doc._id } },
      );
    } else {
      // Handle non-array fields
      await refModel.updateMany(
        { [path]: doc._id },
        { $set: { [path]: null } },
      );
    }
  }
};

// Apply the middleware to relevant query methods
const softDeletePlugin = function <T>(schema: Schema<T>) {
  schema.add({ isDeleted: { type: Boolean, default: false } } as any);

  schema.pre('find', excludeDeletedMiddleware);
  schema.pre('findOne', excludeDeletedMiddleware);
  schema.pre('findOneAndUpdate', excludeDeletedMiddleware);
  schema.pre('count', excludeDeletedMiddleware);
  schema.pre('countDocuments', excludeDeletedMiddleware);
  schema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
  });

  schema.post('find', function (docs: any) {
    docs.forEach((doc: any) => {
      if (doc.populatedPaths) {
        doc.populatedPaths().forEach((path: string) => {
          doc[path] = filterDeletedAfterPopulate(doc[path]);
        });
      }
    });
  });

  schema.post('findOne', function (doc: any) {
    if (doc && doc.populatedPaths) {
      doc.populatedPaths().forEach((path: string) => {
        doc[path] = filterDeletedAfterPopulate(doc[path]);
      });
    }
  });
};

export { softDeletePlugin };
