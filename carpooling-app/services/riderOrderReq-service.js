import RiderOrderReq from "../model/RiderRequest.js";
import AppError from "../utils/AppError.js";
export const saveRiderOrderReq = async (newRiderOrderReq) => {
  //return value of asyn func is promise
  const riderOrderReq = new RiderOrderReq(newRiderOrderReq);
  return riderOrderReq.save();
};

export const getRiderReq = async (rider) => {
  //return value of asyn func is promise
  const riderOrderReq = await RiderOrderReq.findOne({
    rider: rider,
  }).exec();
  return riderOrderReq;
};

export const getDriverOrderNumberReq = async (id) => {
  //return value of asyn func is promise
  const riderOrderReq = await RiderOrderReq.find({
    DriverOrderNumber: id,
  }).exec();
  return riderOrderReq;
};

export const getRiderOrderDetails = async (rider) => {
  //return value of asyn func is promise
  const riderOrderReq = await RiderOrderReq.find({
    RiderId: rider,
  }).exec();

  return riderOrderReq;
};

export const removeRiderOrderReq = async (id) => {
  //return value of asyn func is promise
  const riderOrderReq = await RiderOrderReq.findByIdAndDelete(id).exec();
  return riderOrderReq;
};

//Creating update service which is called from controllers
export const updateDetails = async (id, updatedriderOrderReq) => {
  //return value of asyn func is promise
  //const reminderwithdate  = {...updatedReminder, lastModifiedDate: Date.now()}
  const riderOrderReqNew = { ...updatedriderOrderReq };
  const riderOrderReq = await RiderOrderReq.findOneAndUpdate(
    { RiderId: id },
    { $set: riderOrderReqNew },
    { new: true }
  ).exec();
  //const riderOrderReq =  RiderOrderReq.findOneAndUpdate({ RiderId: id } ,{ $push: { ratings: riderOrderReqNew.ratings } },riderOrderReqNew,{new: true}).exec();
  return riderOrderReq;
};

//Creating update service which is called from controllers
export const approveRideRequest = async (id, requestPayload) => {
  //return value of asyn func is promise
  //const reminderwithdate  = {...updatedReminder, lastModifiedDate: Date.now()}
  const rideRequest = { ...requestPayload };
  const riderOrderReq = await RiderOrderReq.updateOne(
    { RequestId: id },
    {
      $set: {
        CommuteStatus: "approved",
      },
    },
    { new: true }
  ).exec();
  //const riderOrderReq =  RiderOrderReq.findOneAndUpdate({ RiderId: id } ,{ $push: { ratings: riderOrderReqNew.ratings } },riderOrderReqNew,{new: true}).exec();
  return riderOrderReq;
};

export const searchRiderOrderReq = async (params) => {
  //return value of asyn func is promise
  const riderOrderReqs = await RiderOrderReq.find(params).exec();
  return riderOrderReqs;
};
