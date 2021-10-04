import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistedConfig: PersistConfig<unknown, any, any, any> = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth", "general"],
};
