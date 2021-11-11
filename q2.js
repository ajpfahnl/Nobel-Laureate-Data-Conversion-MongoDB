db.laureates.aggregate([
    {$match: {"nobelPrizes.affiliations.name.en": "CERN"}},
    {$project: {"country": {$first: {$first: "$nobelPrizes.affiliations.country.en"}}, "_id": 0}},
    {$limit:1}
])