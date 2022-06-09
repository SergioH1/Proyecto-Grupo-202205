export function InfoCharge({
    charges,
}: {
    charges: Array<string> | undefined;
}) {
    return (
        <>
            {charges?.map((charge) => {
                return <p key={charge}>{charge}</p>;
            })}
        </>
    );
}
