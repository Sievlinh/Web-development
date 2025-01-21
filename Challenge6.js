function votingSystem(votes) {
    let voteCount = { A: 0, B: 0, C: 0 };
    for (let vote of votes) {
        if (voteCount[vote] !== undefined) {
            voteCount[vote]++;
        } else {
            console.log(`Invalid vote: ${vote}`);
        }
    }
    let winner = null;
    let maxVotes = 0;
    for (let candidate in voteCount) {
        if (voteCount[candidate] > maxVotes) {
            maxVotes = voteCount[candidate];
            winner = candidate;
        }
    }
    let tiedCandidates = Object.keys(voteCount).filter(
        (candidate) => voteCount[candidate] === maxVotes
    );

    if (tiedCandidates.length > 1) {
        return { voteCount, result: tiedCandidates.join(" and ") + " are both winner." };
    }

    return { voteCount, result: `Winner is: ${winner}` };
}
let votes = ["A", "A", "C", "A", "C", "C"];
let result = votingSystem(votes);

console.log("Vote Count:", result.voteCount);
console.log(result.result);
