const inject = function (items, sections) {
    for(let i=0;i<sections.length;i++){
        let selfIndex = sections[i].index+i;
        items.splice(selfIndex, 0, sections[i].content);
    }
    return items;
}
export { inject };
