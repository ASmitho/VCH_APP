import { QuestCreate, QuestMean, QuestSd, QuestQuantile } from "./Quest.js"

export function vis_quest( currentNoise, trialsDesired, tGuess_1, tGuessSd_1, tGuess_2, tGuessSd_2, pThreshold, beta, delta, gamma ){

    var q1= QuestCreate(tGuess_1, tGuessSd_1, pThreshold, beta, delta, gamma);
    q1.normalizePdf = 1;

    var q2 = QuestCreate(tGuess_2, tGuessSd_2, pThreshold, beta, delta, gamma);
    q2.normalizePdf = 1;

    // Quest Trial numbers
    var q1_trialnum = 0;
    var q2_trialnum = 0;
    var k = 0;                      //overall trial numbers
    var frame = 0; 
    var log_contrast_1;
    var log_contrast_2;

    console.log(q1); 

    while(k < (trialsDesired * 2)){
        frame += 1; 
        var nowTime = new Date().getTime() / 1000;      
        var currentQ = 0; 

        
        k += 1; 

        if(q1_trialnum == q2_trialnum){  // if equal trial numbers, time to go to the next one for staircase 1_
                q1_trialnum = q1_trialnum + 1;
                currentQ = 1;
        }
        if(q1_trialnum != q2_trialnum){  // cannot have multiple if and else blocks in Javascript
            q2_trialnum = q2_trialnum + 1;
            currentQ = 2;
        }
        if( currentQ == 1 ){
            
            if(k == 1){
                log_contrast_1 = tGuess_1+0.3;  //  Make this procedure go from high to low contrast.
            }
            // if(k != 1){
            //     if !isNaN(trialdata_1{q_1_trialnum-1,2})  // Repeat last level if pt did not have recorded response.
            //             log_contrast_1=QuestQuantile(q_1) // Recommended by Pelli (1987), and still our favorite
            // }
            // if ~isnan(trialdata_1{q_1_trialnum,2})
            //q_1=QuestUpdate(q_1,log_contrast_1,accuracy_1(q_1_trialnum,1)); % Add the new datum (actual test intensity and observer response) to the database.

            ///////////////////////////DOES TRIALDATA ISNAN HAVE TO BE INCLUDED? //////////////////////////////////////

            else{
                if( k == 2 ){
                    log_contrast_2 = tGuess_2 - 0.3;  // Make this procedure go from low to high contrast
                }
                else{
                    log_contrast_2 = QuestQuantile(q2);
                }
            }
        }
                
                
    }

    const math = require('mathjs');

    //Statistics
    var t1 = QuestMean(q1);		// Recommended by Pelli (1989) and King-Smith et al. (1994) as the best way to ascertain threshold.
    var sd1= QuestSd(q1);
    
    var t2 = QuestMean(q2);		// Recommended by Pelli (1989) and King-Smith et al. (1994) as the best way to ascertain threshold.
    var sd2 = QuestSd(q2);
    
    // Take the arithmetic mean of these two threshold (75%) estimates.
    var tmean = math.mean([t1,t2]);
    var sdmean = math.mean([sd1,sd2]);

    var lambda = 0; // normally in config file//////////////////////
    var gamma = 0.01; // normally in config file//////////////////////

    var intensities = gumbel_intensities(q1, q2, tmean, lambda, gamma);

    return intensities; 
}

//   To be used within context of QUEST-like program.  Defines intensities at
//   which participants are likely to detect tone in noise at 75%
//   (threshold), 50%, 25% probabilities.  First row of returned matrix are
//   these labels.  The second gives the intensities in decibels, the third
//   in scale units (coefficient used to scale full-scaled tone).  Required
//   inputs are the QUEST structures produced by the CH QUEST procedure via
//   ch_auditory_quest. q_1 and q_2 variables are the structures produced by
//   the QUEST procedure.  t_mean is the arithmetic mean of the two threshold
//   estimates produced by the two interleaved staircases.

export function gumbel_intensities( q1, q2, tmean ){
    
    var intensities = [25, 50, 75, 90];


}

export function ch_QuestBetaAnalysis( q ){
    
    console.log(q); 

    const math = require('mathjs');

    var q2 =  QuestCreate( q.tGuess, q.tGuessSd, q.pThreshold, math.eval("2^(1/4)"), q.delta, q.gamma, 0.02);
    q2.dim = 250; 
    //var qq = QuestRecompute( q2 ); 

    console.log(q2); 

    // var t2= QuestMean(q2); // estimate threshold for each possible beta
    // var p2= QuestPdf(q2,t2); // get probability of each of these (threshold,beta) combinations
    // var sd2= QuestSd(q2); // get sd of threshold for each possible beta
    // var beta2 = q2.beta;

    // console.log(t2, p2, sd2, beta2);

    // var p = Math.max(p2); 
    // var index = indexOfMax(p2);
    // var t = t2[index];
    // var sd = QuestSd(q2);
    // p = math.sum(p2);
    // var betaMean = p2.map(function(x) {return x * beta2});
    // betaMean = math.sum(betaMean);
    // betaMean = betaMean / p;

    //var temp1 = p2.map(function(x) { return (math.pow( (x * beta2), 2) ) } );


}