

export const generateId = () => {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000);
        return `${timestamp}-${randomNum}`;
}