const homeController = (req, res) => {
    res.render("screens/home")
};

const breadController = (req, res) => {
    res.render("screens/bread")
};

export const globalController = {
    homeController,
    breadController,
}