let sudokuGrid = Array.from({length:9},()=>Array(9).fill(null))

const body = document.getElementsByTagName("body")[0];
const container = document.createElement("div");
container.classList.add("container")
body.append(container)

for(let i=1;i<=3;i++){
    const row = document.createElement("div")
    row.id=`outer-row-${i}`;
    row.classList.add("outer-row")
    container.append(row)
}

for(let i=1;i<=9;i++){
    const box = document.createElement("div")
    const rowRef = Math.ceil(i/3);
    const boxIndex=Math.ceil(i%4)
    box.id = `box-${rowRef}-${boxIndex}`;
    box.classList.add("box");
    const outerRow = document.getElementById(`outer-row-${Math.ceil(i/3)}`)
    outerRow.append(box)
}


for(let i=1;i<=27;i++){
    const innerRow = document.createElement("div")
    const boxRef = Math.ceil(i/3)
    const rowRef = Math.ceil(i/9)
    console.log(boxRef)
    innerRow.id=`inner-row-${rowRef}-${boxRef}-${i}`
    innerRow.classList.add("inner-row");
    const box = document.getElementById(`box-${rowRef}-${i}`)
    box.append(innerRow);
}

for(let i=1;i<=81;i++){
    const finalBox = document.createElement("div")
    const rowRef = Math.ceil(i/27)
    const boxRef = Math.ceil(i/9);
    const innerRowRef = Math.ceil(i/3);
    finalBox.id = `final-box-${boxRef}-${innerRowRef}`
    finalBox.classList.add("final-row")
    const innerRow = document.getElementById(`inner-row-${rowRef}-${boxRef}-${i}`)
    innerRow.append(finalBox)

}