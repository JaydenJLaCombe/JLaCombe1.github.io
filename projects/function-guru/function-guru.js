//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

    var values = [];

    for (var key in object) {
        values.push(object[key]);
    }
    return values;

}
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];

    for (var key in object) {
        arr.push(key);
    }

    arr = arr.join(" ");
    return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

    var arr = [];

    for (var key in object) {
        if (typeof(object[key]) === "string") {
            arr.push(object[key]);
        }
    }

    arr = arr.join(" ");
    return arr;

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {

    if (Array.isArray(collection)) {
        return "array";
    } else if (typeof(collection) !== "object" || collection instanceof Date === false || Array.isArray(collection) === false || collection !== null) {
        return "object";
    }


}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    var arr = string.split(" ");
    var arr2 = [];
    
    for (var i = 0; i < arr.length; i++) {
        arr2.push(capitalizeWord(arr[i]));
    }
    return arr2.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    
    
    
    return "Welcome " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);


}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if (object && object.noises) {
        if (Array.isArray(object.noises)) {
            if (object.noises.length > 0) {
                return object.noises.join(" ");
            }
        }
        
    }
    
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    let arr = string.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }
    
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    if (object.friends) {
        for (let i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
                return true;
            }
        }
    }
    
    return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let friendsList = [];
    let notFriends = [];

    for (let i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            friendsList = array[i].friends;
        }
    }

    for (let i = 0; i < array.length; i++) {

        if (!friendsList.includes(array[i].name) && array[i].name != name) {
            notFriends.push(array[i].name);
        }
    }
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    for (var i = 0; i < array.length; i++) {
        for (var key in object) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    let newArr= [];

    for (var i = 0; i < array.length; i++) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
        }
    }
    
    return newArr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}