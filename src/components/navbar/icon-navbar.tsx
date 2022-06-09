export function IconNavBar() {
    let template = (
        <>
            <li key="heart">
                <a href="./favorites">
                    <img
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
