import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { GetMyScheduleResponse } from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
    Query: {
        GetMySchedule: privateResolver(async(_, __, {req}): Promise<GetMyScheduleResponse> => {
            try {
                const user = await User.findOne({id: req.user.id}, {relations: ["schedule"]});
                if(user) {
                    return {
                        ok: true,
                        error: null,
                        schedule: user.schedule
                    }
                } else {
                    return {
                        ok: false,
                        error: "User not found",
                        schedule: null
                    }
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    schedule: null
                }
            }
        })
    }
}

export default resolvers;