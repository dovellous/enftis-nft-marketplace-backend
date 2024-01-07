import { handleHttpStatus } from "../../../..";

export const requestCheck____MODEL_ALL_CAMEL_CASE____RowInterface = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "REQUEST_ROW_INTERFACE_CHECK"
    );
  }
};

export const requestCheck____MODEL_ALL_CAMEL_CASE____InsertInterface = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "REQUEST_INSERT_INTERFACE_CHECK"
    );
  }
};

export const requestCheck____MODEL_ALL_CAMEL_CASE____UpdateInterface = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "REQUEST_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const responseCheck____MODEL_ALL_CAMEL_CASE____RowInterface = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "RESPONSE_ROW_INTERFACE_CHECK"
    );
  }
};

export const responseCheck____MODEL_ALL_CAMEL_CASE____InsertInterface = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "RESPONSE_INSERT_INTERFACE_CHECK"
    );
  }
};

export const responseCheck____MODEL_ALL_CAMEL_CASE____UpdateInterface = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerate____MODEL_ALL_CAMEL_CASE____ModelOptions = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerate____MODEL_ALL_CAMEL_CASE____ModelUUID = (
  req: any,
  res: any,
  next: any
) => {
  const { emailAddress, username, password } = req.body;

  const userId = emailAddress || username;

  if (userId && password) {
    next();
  } else {
    return handleHttpStatus(
      res,
      400,
      "Missing or invalid parameters",
      req.body,
      "____MODEL_ALL_CAMEL_CASE____",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};
