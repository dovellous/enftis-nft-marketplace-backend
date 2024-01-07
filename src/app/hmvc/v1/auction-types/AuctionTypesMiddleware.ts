import { handleHttpStatus } from "../../../..";

export const requestCheckAuctionTypesRowInterface = (
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
      "AuctionTypes",
      "REQUEST_ROW_INTERFACE_CHECK"
    );
  }
};

export const requestCheckAuctionTypesInsertInterface = (
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
      "AuctionTypes",
      "REQUEST_INSERT_INTERFACE_CHECK"
    );
  }
};

export const requestCheckAuctionTypesUpdateInterface = (
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
      "AuctionTypes",
      "REQUEST_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const responseCheckAuctionTypesRowInterface = (
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
      "AuctionTypes",
      "RESPONSE_ROW_INTERFACE_CHECK"
    );
  }
};

export const responseCheckAuctionTypesInsertInterface = (
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
      "AuctionTypes",
      "RESPONSE_INSERT_INTERFACE_CHECK"
    );
  }
};

export const responseCheckAuctionTypesUpdateInterface = (
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
      "AuctionTypes",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateAuctionTypesModelOptions = (
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
      "AuctionTypes",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};

export const requestGenerateAuctionTypesModelUUID = (
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
      "AuctionTypes",
      "RESPONSE_UPDATE_INTERFACE_CHECK"
    );
  }
};
