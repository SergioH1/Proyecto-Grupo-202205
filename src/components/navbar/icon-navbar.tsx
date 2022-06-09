export function IconNavBar() {
    let template = (
        <>
            <li key="heart">
                <a href="./favorites">
                    <img
                        className="heart-icon"
                        role="button"
                        src="./svg/favoritos.svg"
                        alt="icon heart"
                    />
                </a>
            </li>
        </>
    );

    return template;
}
