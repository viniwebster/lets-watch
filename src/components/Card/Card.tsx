import HeartIcon from '../../assets/Heart.svg?react';
import HeartFullIcon from '../../assets/Heart.svg?react';
import Star from '../../assets/Star.svg?react';

const Card = () => {
    return(
        <div className="flex items-center justify-between flex-wrap w-full max-w-7xl bg-bg-card shadow-bg-card py-7 px-8 rounded-lg cursor-pointer hover:translate-x-3 hover:transition-all">
            <div className="h-32 w-32 rounded-full shadow-bg-primary">
                <img src="https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg" className="h-full w-full rounded-full "/>
            </div>
            <div className="text-txt-title">
                <h2 className="text-lg font-medium mb-2">Avengers Endgame (2019)</h2>
                <div className="flex items-center justify-between">
                    <span className='flex items-center gap-4'><Star /> 9,2</span>
                    <span className='flex items-center gap-2'><HeartFullIcon /> Favoritar</span>
                </div>
            </div>
            <p className="w-1/2 text-txt-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat reiciendis facilis, iusto sunt non facere dolores, libero assumenda soluta rerum ipsam optio quo voluptatibus blanditiis iure fugit a recusandae.  
            </p>
        </div>
    )
}

export default Card