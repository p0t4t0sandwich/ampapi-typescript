/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";

/**
 * @class MinecraftModule
 */
export class MinecraftModule extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the MinecraftModule class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @return {Promise<boolean>}
     */
    async AcceptEULA(): Promise<boolean> {
        return this.apiCall("MinecraftModule/AcceptEULA", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<any>}
     */
    async AddOPEntry(UserOrUUID: string): Promise<any> {
        return this.apiCall("MinecraftModule/AddOPEntry", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<any>}
     */
    async AddToWhitelist(UserOrUUID: string): Promise<any> {
        return this.apiCall("MinecraftModule/AddToWhitelist", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async BanUserByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/BanUserByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async BukGetCategories(): Promise<any> {
        return this.apiCall("MinecraftModule/BukGetCategories", { 
        });
    }

    /**
     * Name Description Optional
     * @param {number} pluginId  False
     * @return {Promise<any>}
     */
    async BukGetInstallUpdatePlugin(pluginId: number): Promise<any> {
        return this.apiCall("MinecraftModule/BukGetInstallUpdatePlugin", { 
            pluginId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async BukGetInstalledPlugins(): Promise<any> {
        return this.apiCall("MinecraftModule/BukGetInstalledPlugins", { 
        });
    }

    /**
     * Name Description Optional
     * @param {number} PluginId  False
     * @return {Promise<any>}
     */
    async BukGetPluginInfo(PluginId: number): Promise<any> {
        return this.apiCall("MinecraftModule/BukGetPluginInfo", { 
            PluginId
        });
    }

    /**
     * Name Description Optional
     * @param {string} CategoryId  False
     * @param {number} PageNumber  False
     * @param {number} PageSize  False
     * @return {Promise<any>}
     */
    async BukGetPluginsForCategory(CategoryId: string, PageNumber: number, PageSize: number): Promise<any> {
        return this.apiCall("MinecraftModule/BukGetPluginsForCategory", { 
            CategoryId,
            PageNumber,
            PageSize
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async BukGetPopularPlugins(): Promise<any> {
        return this.apiCall("MinecraftModule/BukGetPopularPlugins", { 
        });
    }

    /**
     * Name Description Optional
     * @param {number} PluginId  False
     * @return {Promise<void>}
     */
    async BukGetRemovePlugin(PluginId: number): Promise<void> {
        return this.apiCall("MinecraftModule/BukGetRemovePlugin", { 
            PluginId
        });
    }

    /**
     * Name Description Optional
     * @param {string} Query  False
     * @param {number} PageNumber  False
     * @param {number} PageSize  False
     * @return {Promise<any>}
     */
    async BukGetSearch(Query: string, PageNumber: number, PageSize: number): Promise<any> {
        return this.apiCall("MinecraftModule/BukGetSearch", { 
            Query,
            PageNumber,
            PageSize
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async ClearInventoryByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/ClearInventoryByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<string>}
     */
    async GetFailureReason(): Promise<string> {
        return this.apiCall("MinecraftModule/GetFailureReason", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} id  False
     * @return {Promise<string>}
     */
    async GetHeadByUUID(id: string): Promise<string> {
        return this.apiCall("MinecraftModule/GetHeadByUUID", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetOPWhitelist(): Promise<any> {
        return this.apiCall("MinecraftModule/GetOPWhitelist", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetWhitelist(): Promise<any[]> {
        return this.apiCall("MinecraftModule/GetWhitelist", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async KickUserByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/KickUserByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async KillByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/KillByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async LoadOPList(): Promise<any[]> {
        return this.apiCall("MinecraftModule/LoadOPList", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<void>}
     */
    async RemoveOPEntry(UserOrUUID: string): Promise<void> {
        return this.apiCall("MinecraftModule/RemoveOPEntry", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<void>}
     */
    async RemoveWhitelistEntry(UserOrUUID: string): Promise<void> {
        return this.apiCall("MinecraftModule/RemoveWhitelistEntry", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async SmiteByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/SmiteByID", { 
            ID
        });
    }

}