db.laureates.aggregate([
    {$match: {orgName: {$exists: true}}},
    {$unwind: "$nobelPrizes"},
    {$project: {"awardYear": "$nobelPrizes.awardYear", _id:0}},
    {$group: {_id: "$awardYear"}},
    {$count: "years"}
])