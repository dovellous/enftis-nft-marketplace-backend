import { handleHttpStatus } from "../../../..";

export const requestCheckMiningSessionsRowInterface = (
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
      "MiningSessions",
      "REQUEST_ROW_INTERFACE_CHECK"
    );
  }
};

export const requestCheckMiningSessionsInsertInterface = (
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
      "MiningSessions",
      "REQUEST_INSERT_INTERFACE_CHECK"
    );
  }
};

export const requestCheckMiningSessionsUpdateInterface = (
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
      "MiningSessions",
      "REQUEST_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const responseCheckMiningSessionsRowInterface = (
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
      "MiningSessions",
      "RESPONSE_ROW_INTERFACE_CHECK"
    );
  }
};

export const responseCheckMiningSessionsInsertInterface = (
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
      "MiningSessions",
      "RESPONSE_INSERT_INTERFACE_CHECK"
    );
  }
};

export const responseCheckMiningSessionsUpdateInterface = (
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
      "MiningSessions",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateMiningSessionsModelOptions = (
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
      "MiningSessions",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateMiningSessionsModelUUID = (
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
      "MiningSessions",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};
