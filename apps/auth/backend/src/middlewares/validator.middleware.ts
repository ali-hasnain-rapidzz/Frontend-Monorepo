import { validateOrReject } from 'class-validator';

export const ValidatorMiddleware = <T extends object>(
  ValidatorClass: new () => T,
) => {
  return async (dto: T): Promise<void> => {
    const validator = new ValidatorClass();
    Object.assign(validator, dto);
    await validateOrReject(validator);
  };
};
