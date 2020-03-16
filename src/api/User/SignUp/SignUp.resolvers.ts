import { Resolvers } from "../../../types/resolvers";
import { SignUpMutationArgs, SignUpResponse } from "../../../types/graph";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
    Mutation: {
        SignUp: async (_, args: SignUpMutationArgs) : Promise<SignUpResponse> => {
            const { email } = args
            try{
                const existingUser = await User.findOne({ email })
                if(existingUser) {
                    return {
                        ok: false,
                        error: "Existing Email",
                        token: null
                    }
                } else {
                    const newUser = await User.create({...args}).save()
                    const token = createJWT(newUser.id)
                    return {
                        ok: true,
                        error: null,
                        token
                    }
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
        }
    }
}

export default resolvers