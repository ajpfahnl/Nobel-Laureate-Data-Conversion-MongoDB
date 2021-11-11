db.laureates.aggregate([
    {$unwind: "$nobelPrizes"},
    {$unwind: "$nobelPrizes.affiliations"},
    {$match: {"nobelPrizes.affiliations.name.en": "University of California"}},
    {$project: {"name": "$nobelPrizes.affiliations.name.en", "city": "$nobelPrizes.affiliations.city.en", "country": "$nobelPrizes.affiliations.country.en"}},
    {$group: {_id:{"city": "$city", "country": "$country"}}},
    {$count: "locations"}
])