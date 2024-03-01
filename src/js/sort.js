export default function sorting(players) {
    return players.sort((player1, player2) => player2['health'] - player1['health']);
}