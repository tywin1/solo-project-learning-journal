export function formatDate(date) {
    return new Intl.DateTimeFormat("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date(`${date}T00:00:00`));
}