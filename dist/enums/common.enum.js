"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = exports.Sorting = exports.player_status = exports.Role = exports.player_Role = void 0;
var player_Role;
(function (player_Role) {
    player_Role[player_Role["BATSMAN"] = 1] = "BATSMAN";
    player_Role[player_Role["BOWLER"] = 2] = "BOWLER";
    player_Role[player_Role["ALL_ROUNDER"] = 3] = "ALL_ROUNDER";
})(player_Role || (exports.player_Role = player_Role = {}));
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["EMPLOYEE"] = "employee";
    Role["AGENT"] = "agent";
})(Role || (exports.Role = Role = {}));
var player_status;
(function (player_status) {
    player_status[player_status["WRITTEN"] = 1] = "WRITTEN";
    player_status[player_status["BUY"] = 2] = "BUY";
})(player_status || (exports.player_status = player_status = {}));
var Sorting;
(function (Sorting) {
    Sorting["ASC"] = "ASC";
    Sorting["DESC"] = "DESC";
})(Sorting || (exports.Sorting = Sorting = {}));
var Team;
(function (Team) {
    Team[Team["Kolkata Knight Riders"] = 4] = "Kolkata Knight Riders";
    Team[Team["Royal Challengers Bengaluru"] = 9] = "Royal Challengers Bengaluru";
    Team[Team["Sunrisers Hyderabad"] = 10] = "Sunrisers Hyderabad";
    Team[Team["Rajasthan Royals"] = 8] = "Rajasthan Royals";
    Team[Team["Chennai Super Kings"] = 1] = "Chennai Super Kings";
    Team[Team["Mumbai Indians"] = 6] = "Mumbai Indians";
    Team[Team["Delhi Capitals"] = 2] = "Delhi Capitals";
    Team[Team["Lucknow Super Giants"] = 5] = "Lucknow Super Giants";
    Team[Team["Gujarat Titans"] = 3] = "Gujarat Titans";
    Team[Team["Punjab Kings"] = 7] = "Punjab Kings";
})(Team || (exports.Team = Team = {}));
//# sourceMappingURL=common.enum.js.map