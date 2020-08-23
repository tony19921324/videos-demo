export default (items, page, perPage) => {
    const total = (items || []).length;
    const start = perPage * (page - 1);
    let end = perPage * page;

    end = end > total+1 ? total+1 : end;

    return (items || []).slice(start, end);
};