module.exports = function createDreamTeam(members) {
    // RIGHT
    
    let tempArray = [];
    let newArray = [];

    if (!(Array.isArray(members))) return false;
    if (members.length === 0 && typeof members !== "object") return false;

    members.forEach(item => {
        if (typeof item === "string" && item !== "") {
            tempArray.push(item.trim().substr(0,1).toUpperCase());
        }

    });
    newArray = tempArray.sort();
    return String(newArray.join(""));
};