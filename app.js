console.log(portfolioDataArgs);

const printPortfolioData = (profileDataArr) => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('================')

    // is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};
 
printPortfolioData(portfolioDataArgs)