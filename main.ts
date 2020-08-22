import { makeRequest } from "./util";

export class JettLib {
    private key: string;
    private puuid: string;
    constructor(userKey, userPuuid) {
        this.key = userKey;
        this.puuid = userPuuid;
    }
    private baseUrl = "https://na1.api.riotgames.com/";

    matchList(puuid: string) {
        return makeRequest(`${this.baseUrl}/val/match/v1/matchlists/by-puuid/${puuid}`);
    }
    matchById(matchId: number) {
        return makeRequest(`${this.baseUrl}val/match/v1/matches/${matchId}`)
    }
}