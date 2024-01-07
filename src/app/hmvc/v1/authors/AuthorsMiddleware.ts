import { handleHttpStatus } from "../../../..";

export const requestCheckAuthorsRowInterface = (
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
      "Authors",
      "REQUEST_ROW_INTERFACE_CHECK"
    );
  }
};

export const requestCheckAuthorsInsertInterface = (
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
      "Authors",
      "REQUEST_INSERT_INTERFACE_CHECK"
    );
  }
};

export const requestCheckAuthorsUpdateInterface = (
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
      "Authors",
      "REQUEST_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const responseCheckAuthorsRowInterface = (
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
      "Authors",
      "RESPONSE_ROW_INTERFACE_CHECK"
    );
  }
};

export const responseCheckAuthorsInsertInterface = (
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
      "Authors",
      "RESPONSE_INSERT_INTERFACE_CHECK"
    );
  }
};

export const responseCheckAuthorsUpdateInterface = (
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
      "Authors",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateAuthorsModelOptions = (
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
      "Authors",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateAuthorsModelUUID = (
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
      "Authors",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};
