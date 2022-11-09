type AuthType = <T>(userData: T) => Promise<void | any | null>;

export const getRegisteredUser: AuthType = async (userData) => {};

const AuthSevices = {};
export default AuthSevices;
