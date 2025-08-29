export function parseSteps(data: string) {
    return data.split("Step:").slice(1).map((step) => {
        const [header, ...lines] = step.trim().split("\n");
        const [stepNumber, action, techniqueName] = header.match(/(\d+)\)\s+\[ACTION=(.*?)\]\s+\((.*?)\)/)!.slice(1);
        const items = lines.map((line) => {
            const [coords, description] = line.trim().split("\t");
            if (!coords || !description) {
                return {
                    row: -1,
                    col: -1,
                    value: "Invalid",
                    description: line.trim()
                }
            }
            let matchArray = coords.match(/\(\s*(\d+),\s+(\d+),\s+(\w+)\)/)!;
            // console.log("Matches", matchArray, line, "Coords:", coords, "Description:", description);
            const [row, col, value] = matchArray.slice(1);
            return {row: +row, col: +col, value, description: description.trim(), coords: `(${row}, ${col}, ${value})`};
        });
        return {stepNumber: +stepNumber, action, techniqueName, items};
    });
}
