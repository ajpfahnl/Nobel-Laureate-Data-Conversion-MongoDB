db.laureates.aggregate([
    {$unwind: "$nobelPrizes"},
    {$group: {_id: "$familyName", count: {$sum: 1}}},
    {$match: {count: {$gte: 5}, _id: {$exists:true, $ne:null}}},
    {$project: {"familyName": "$_id.en", _id:0}}
])