export default function Footer() {
  return (
    <footer className=" items-center justify-items-center w-auto h-auto bg-white p-2 pb-20 gap-16 sm:p-5 rounded-2xl">
    <div>
        <h2 className="font-bold mb-1">Tango Game -</h2>
        <p className=" mb-4">Tango Game is the ultimate visual logic puzzle inspired by Tango LinkedIn News game. This project is made by <strong>Hardik Sharma</strong> just for some fun</p>
        <div>
            <h3 className="font-bold mb-2">How to play:</h3>
            <ul className="mb-1 list-disc pl-5">
                <li >Fill each cell with either a blue or orange.</li>
                <li>No more than 2 of the same symbol may be next to each other.</li>
                <li>Each row and column must have an equal number of blue and orange.</li>
                <li>Cells separated by = must be the same type.</li>
                <li>Cells separated by × must be opposite types.</li>
                <li>Each puzzle has one right answer and can be solved via deduction (you should never have to make a guess).</li>
            </ul>
        </div>
    </div>
    </footer>
  );
}
