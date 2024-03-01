export default function getHealthState(player) {
    return (player.health >= 50) ? 'healthy' : (player.health >= 15) ? 'wounded' : 'critical';
}