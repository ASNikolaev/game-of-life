function getRandom(min = 1, max = 4) {
    let rand = Math.floor(Math.random() * (max - min) + min);
     return rand === min
}


class Graph{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.neighbors = [-1.01, -1, -0.99, -0.01, 0.01, 0.99, 1, 1.01]
    }

    random(columns, rows) {
        let randomArr = rows.map((row) => {
            return columns.map((column) => {
                let cl = `${row}.${(column < 10) ? `0${column}` : column}`;
                return cl
            })
        });
        randomArr = randomArr.reduce((result, val) => {
            return result.concat(val)
        }, []);


        randomArr = randomArr.filter((item) => {
            return getRandom()
        });

       return randomArr
    }


    checkLifeCycle(live, allID) {

        if (live.length === 0) return [];
        let lives =[...live];

        let arr = [];


        allID.forEach((id) => {
            let countNeighbor = 0;
            this.neighbors.forEach((neighbor) => {
                neighbor = (id - neighbor).toFixed(2);
                if (lives.includes(neighbor)) {
                    countNeighbor += 1
                }
            });

            if ((countNeighbor === 2 || countNeighbor === 3) && lives.includes(id)) {
                arr.push(id)
            }
            if (countNeighbor === 3) {
                arr.push(id)
            }
        });


        return arr
    }
}

const listing = (count) => {
    let arr = [];
    for (let i = 0; i < count; ++i) {
        arr.push(i + 1)
    }
    return arr
};

const generatorID = (y, x) => {
    let arrID = [];
    for (let i = 1; i < y + 1; ++i) {
        for (let j = 1; j < x + 1; ++j) {
            let id = `${i}.${(j < 10) ? `0${j}` : j}`;
            arrID.push(id)
        }
    }
    return arrID
};



export  { Graph, listing, generatorID }
