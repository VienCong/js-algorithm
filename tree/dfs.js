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

const dfs = (root) => {
    console.log(root.val)
    root.children.forEach(dfs)
}
dfs(tree)