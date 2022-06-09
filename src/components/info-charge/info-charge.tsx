export function InfoCharge({ charges }: { charges: Array<string> }) {
    return (
        <>
            {charges.map((charge) => {
                return <p key={charge}>{charge}</p>;
            })}
        </>
    );
}
