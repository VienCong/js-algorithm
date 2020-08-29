const tree = {
    val: 'a',
    children: [
        {
            val: 'b1',
            children: [
                {
                    val: 'c1',
                    children: []
                },
                {
                    val: 'c2',
                    children: []
                }
            ]
        },
        {
            val: 'b2',
            children: [
                {
                    val: 'd1',
                    children: []
                }, {
                    val: 'd2',
                    children: []
                }
            ]
        }
    ]
}

const bfs = (root) => {
    const q = [root]
    while (q.length>0) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
            q.push(child)
        })
        // console.log(q.length, 'length');
    }
}

bfs(tree);