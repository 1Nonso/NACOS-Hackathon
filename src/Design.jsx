import waves from './assets/MusicWave.png'
import leftEarbud from './assets/left.png'
import rightEarbud from './assets/right.png'

const Design = () => {
  return (
    <>
      <section className='Design'>
        <div className='designText'>
          <h1>Trendy Designs with better sound quality</h1>
          <p>We share common trends and strategies for improving your rental income.</p>
        </div>
        <div className='designImgs'>
            <img className='waves' src={waves} alt="" />
            <div className='earBuds'>
                <img className='l_bud' src={leftEarbud} alt="" />
                <img className='r_bud' src={rightEarbud} alt="" />
            </div>
        </div>
      </section>
    </>
  );
};

export default Design;
