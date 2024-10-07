/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {

    let banRadiant = 0;
    let banDire = 0;
    let input = senate.split("");
    let hasRadiant = true;
    let hasDire = true;
    while (hasRadiant && hasDire) {
        hasRadiant = false;
        hasDire = false;

        for (i = 0; i < input.length; i++) {

            if (input[i] == 'R') {
                if (banRadiant == 0) {
                    hasRadiant = true;
                    banDire++

                } else {
                    banRadiant--
                    input[i] = 0;
                }
            } else if (input[i] == 'D') {
                if (banDire <= 0) {
                    hasDire = true;
                    //  Dire.push(true)
                    banRadiant++
                } else {
                    //banDire = Math.min(0,)
                    input[i] = 0;
                    banDire--
                }


            }
            else {
                continue;
            }


        }


    }
    return hasDire ? 'Dire' : 'Radiant'

};