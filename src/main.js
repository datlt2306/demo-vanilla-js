import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/news": () => print(NewsPage),
    "/admin/dashboard": () => print(Dashboard),
});
router.resolve();