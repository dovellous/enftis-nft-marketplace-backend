import { handleHttpStatus } from "../../../..";

export const requestCheckBonusesRowInterface = (
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
      "Bonuses",
      "REQUEST_ROW_INTERFACE_CHECK"
    );
  }
};

export const requestCheckBonusesInsertInterface = (
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
      "Bonuses",
      "REQUEST_INSERT_INTERFACE_CHECK"
    );
  }
};

export const requestCheckBonusesUpdateInterface = (
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
      "Bonuses",
      "REQUEST_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const responseCheckBonusesRowInterface = (
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
      "Bonuses",
      "RESPONSE_ROW_INTERFACE_CHECK"
    );
  }
};

export const responseCheckBonusesInsertInterface = (
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
      "Bonuses",
      "RESPONSE_INSERT_INTERFACE_CHECK"
    );
  }
};

export const responseCheckBonusesUpdateInterface = (
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
      "Bonuses",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateBonusesModelOptions = (
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
      "Bonuses",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateBonusesModelUUID = (
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
      "Bonuses",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};
