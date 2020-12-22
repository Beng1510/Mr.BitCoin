import { storageService } from './StorageService.js'
import { makeId } from './utilService.js'

const STORAGE_KEY = 'user'
const STORAGE_MOVE_KEY = 'moves'
var gMoves = _loadMoves()
export const userService = {
    getUser,
    signup,
    addMove,
    getMoves
}

function getUser() {
    console.log('getting user');

    let user = storageService.load(STORAGE_KEY)
    if (!user ) return getDefaultUser()
    return user
    // return {
    //     name: "Ochoa Hyde",
    //     coins: 100,
    //     moves: []
    // }
}

function getDefaultUser() {
    console.log('getting default');
    return {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
}
function signup(userToSave) {
    userToSave._id = makeId()
    userToSave.coins = 100
    userToSave.moves = []
    storageService.store(STORAGE_KEY, userToSave)
}

function addMove(contact, amount) {
    let user = storageService.load(STORAGE_KEY)
    var move = {
        toId: contact._id,
        to: contact.name,
        at:  new Date().toLocaleString(),
        amount: amount
    }
    user.moves.unshift(move)
    storageService.store(STORAGE_KEY, user)
    _updateUserBalance(amount)
}

function _updateUserBalance(amount) {
    let user = storageService.load(STORAGE_KEY)
    user.coins -= amount
    storageService.store(STORAGE_KEY, user)


}

function _loadMoves() {
    let moves = storageService.load(STORAGE_MOVE_KEY)
    if (!moves || !moves.length) moves = []
    storageService.store(STORAGE_MOVE_KEY, moves)
    return moves
}

function getMoves() {
    let user = storageService.load(STORAGE_KEY)
    return user.moves
}