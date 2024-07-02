interface Props {
    page: number,
    nextPage: React.Dispatch<React.SetStateAction<number>>
}

const Next = ({ page, nextPage } : Props) => {
    return(
        <div className="flex items-center text-txt-title">
            <button disabled={page === 1} onClick={() => nextPage(page - 1)} className="bg-bg-card py-4 px-8 w-32 disabled:bg-bg-input">
                Previous
            </button>
            <span className="bg-txt-desc w-16 py-4  text-center">{page < 1 ? 1 : page}</span>
            <button onClick={() => nextPage(page + 1)} className="bg-bg-card py-4 px-8 w-32">
                Next
            </button>
        </div>
    )
}

export default Next