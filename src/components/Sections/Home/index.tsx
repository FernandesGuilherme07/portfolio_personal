import Button from "components/UI/Button";

import * as S from "./styles";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <S.HomeSection id="home">
      <S.ItemsHomeWrapper>
        <S.Welcome>
          <h2>Hello!</h2>
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M0 30.1H30V0.0999998H0V30.1Z" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0" transform="scale(0.015625)" />
              </pattern>
              <image
                id="image0"
                width="64"
                height="64"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAASMUlEQVR42u2baYxlR3XHf7Xce9/ar3t6mfHMeDyLx2BsYoyCTYyxwRibDxBILIyQCUEQJ0gQhSyIfEEJEkkQEqA4ggAixAJBFEAEEAmLE4slRDYEE4zHGDOewZ596e7pfsvdqurkw73d/WZMwHg8zSClpKvX6u6qV/Wvs/7PuYpfsfGBd9lo6SHV6y7I8pu/4IqzXU+d6w2/+zXduZuu6f3u7Mzks5OmYeEnC/8TkmMfffrvFyd+kXU+enszuvEZc69vXTr3O0rFW6VIDy89Nv/5kzPHPnD1q7L+eQnAPe/pXnT5Zbu/2L7wwsuJOiAG3IBTe/d8/dsP7/vtm99aLjzRte766wvedeNvXvE2ohlAAwJumb3ffeDTyXv237bt+6F8MnvU5xKAzZPT721v3345qg2lBW9BT9C7cNv12zvddz7RdfbcEj/3Oc+d/RPsJDgN3lRrmR7bL77gld97QfLiJ7vHcwbAB16mJuxU42rEgEh1Y1QfqtGju2n6li++wmx+Imv5K+NXdNvtCC+1zNaCGzy2kTAzE1//+dfqDecVAI1dxLrIGvgCJAChBkGBipmZmZpzO+zLn8hazdn4Om3iMzRWqnXF47RMPphJ67wCYPP95KPRMKMc1gcfA0A0UbtFr2ev+XnrfOz1ekezYZ+Jjk43W1KvWaaUfb/kjqv0vALgJXdLPx2kJ0O2DLhaCsaGSeh0kl0/F8jt6vJ2K+6g7RkSEEAcLh2xsOwfevvXwvx5ZwSPHXV7/HAZQrkmsitfaxIumGvvuuN2velnrdFpmF02iUCZGgC1BkDIyfvLPDJwD5x3RhDg1MHwlcHyMrgRqBU7UIuxipicbs1tnjVX/kxbEvRO24jPAEAAD27EwsnRqeWRf+y8BIAQvrW4MBqGfADiT7cDGJKJFht8dMPP3KDRl9l4HIAV8fdQDDlxovjx33xGjp6XAHxzPhz0g+KQSwe1GqxIgQJlsUmLuVn7vP9r/ifebOba7egyHTceLwHi8PmI4yfKe85mj+cUgPd9KeRlHh7Mh0PweX1zY3YgbtOZbu76+9v1zE+bn1j1rFY72qhsAzCg9Jj7K8nTEdkxd+95CwDAcgjfLEcpUo5qNZDTDOHUVHuulZhf+2lzI6WuabRjlI3qw495AJeTZSn5/vDj8xqAYRG+lS5nwedDCMXjAqLWZIctXXvzT5vbberLk1ZMFQPo0w2gTylPFaN7p8Ox8xqAcFj29JfL/S4dgkurza8CEGEbLeam7bVnzvu7P9Jqsm126TgGZc/Qf4+UGScXi6OXbeH4eQ3ATR/yg8VB2FuMhpUahGJMDQzELSZnGjv/8Ao1NT5v54Te1m6bndrWHmBFBaQKgEKZs7Do9vzeB0J6XgMAsHRSfpT3R/h8BD5dM4RKg23S6jY3XX+VPc0OHDugrmxP2IkKAL0W/yMQCnyec2Tef+ds97YuAEwr7u33S4p0gBRDkDoyRIOKmZjs0NtkXjY+Z9Kqq5tti9JmTP+p9b9gkGfYx/x3fyUA6E/JPcVy6OeDAT4fgh/VugzoCNNss31TdP34nIlp/TQbRyhtTwdAPPic0ckinXy+PPwrAcCL3lHsO35c9uT9ES4dIkUfxNWHsmjboD3V2P3VW8yFAB+8XcezU3q3jqLaWKqxFNghLiNLi4X+MTl+tnuz5+LA/3hbfMnTLoveND0VP8ca1UhHYe+hR8re4vGSZm+ZqNXBJEOwcWUIbUK33ewt7TTXgf/EriV9abOndptV/z8GQCgJrqAoyoU0k8F5B8DX3pm84ZILO++dmutNmEajEmHxV27ZtsyRh+cZzA+I230ajQHK9moAWiTtFr3IvBT4RHe3vrHdsMlaADTmAXyOlAUn5v3RV7//zBx7HQD40hu12bG7dYvpRS8uM910Xp04dSj7t+vePbjr0zfFN+zaFH1kalOPqL0BbZPaiAm9pE2ZO5aOLeLytAqNJVQ+3rQwjRazk/a6b9+mJyZn1Y1RYjE2quaPe4FQ4PKMNAs/eiou7BcCYM+HzUzTdf9p487ZGxudLtpa8I7hJUtv+ReRO/Y8GOJrlULZBjpqoKImmBgkoEpNZ7rL8vElfBkIvsSIAxWDilBJhy3b2pv3FcU7mp3kWa2pKUzcAtust7kWBOV5ydKC/GDdAYhU8t6NOzbc2NqwEZIJUBGEgnbc5IZrizf5k/NuMFDMRFF1+Khdf4WH4DCRJRsp0kFgQjGWGxhU1KW3cYZn9tpviZpdbKOFiptg22MhcP144fAJvX9dAbjzDWa2F8U3R+0JiLtgWtXGdAQEWr2u2bpl3uQFlWSYuF6+OiA6wlhLUWiGyx5tTZ3i1mGx7RC1p4jbk2uR3yoP6EFU5Tm8oyw9pffDdQVg9xa9kcj2TNwEU6en6Cq50Q1MFBOUpihAa7O2+RUXpg3aRMQNQz4KlQfQUX1+AZWgmjPgs4o7UAb0yves3HxG8A7nQ4hbZxcC/8JxQP+IkLQjdNypNq7s2qOjSlwjy3AkYOrbVWoNKGVRNqbZNXjn6gRHj/GcCnQb7ARE3eoxzVpKVjjAApGA0hJsLG5dAZhokwfVcETNmpyoD7/yc9yi22tQlgLGrrkvtQJGBCahPRHRaitWy1sipxdOlAXdArVy+3UWKJUdQUArbXfM6Na6ApAsqgE2yTHjvnksShPo9hJcqcC7arPaVgdXEfgUKTPipqU1Ea3ZkBU1Ubr+fzumXmZtiyFDXEYIHhNrLkj01nW1AV/eE/I3+iInXQDTrkRUGfAZks3j03mUFJSlUPYXUHmJjpqIsuBLXHqKvH+KfNhHxILLIdLgq9w+uBwJAWViTLNTgRHqWw8pFH2CKwjeYVDkPXXpugKw1CJfPLyUN6P9KNvAxE2UtojPKUYDXDYk72cUuSJdWiLIMt55JDjEB7wLZIMC7wWFZvGR72FbXULpEJ8DggShLBw26dDcsJWoO41ttYEC8QXiPRICWgki6uJ1BeBEiT5xKNWTPQ/aorRGG4OEgC9KyjxnuCwcO2lIByPK3OOdMLtjG1FnhuAKJDiUUihtEAFlNNom6KiBtkmlSeUIly7hsnlGhw+gozZxd4oo0mhrUaUGo2gIm9cVgOeMJCq8xEvHcxoTJUprFIoQAq4I+Cxw9JChoaF/0uHKwMRsm9aGWWhvq+wA/oxVV+zHSqATUFGHqDVLJIGmz3DDebLFY6RFhklaRI2EKIkJQU+urxeYM1GvraLD+wwnDwrpUkk2KCkzTzEMHNxvcKXmedcJh/Zrjj1m8B7EZVAsVlSY1IcVXTVLiK4exsvn9d+JwHSxvYvobLuC9txWXDZk6cgR8kFB3NHt17161Ueeewk4YlV0VQvrusJjP7aYSIhiwVjIM7AJXPXCBp3JiGOH+uz5vmViLmfjjmUiZSFfRlCV+pgYpePVDE9ql650BLZR5QcrXkZCRZ72tjHZ2UCxcIilw4doKN979k7duhPfXxcArr7WB22sbNwutHuOheOKNFWIgq27YOvuFklnguAc23YrHv2JZ+9Dim2XzNMWhfhA8FWVWGmDthFKKURCZQ8UGJtgu9OoxsxYJUiv0YG6Qzy9jdluD9vYv+XSk0dfD/5vzwaAJ9wjdOAmM5fe2nhwQ6cxrbQCkcp1G4NNKq8QnMeVOWU6Yul4yqMPaWY3C5t2xphVdqcKlZXWIELwHqkRsHFCs7cB25mFZHrsfmStHkgAySGd5+iBvW7/++evvuZud985l4B+SalFFTZJMFGMiFTxi7GYOEEpBSGglEZpS6tnuOhpjqP7DcN+wdyFOe2uRluDaA1KEZzHO08IUgHSFspshLZLaBNXYfE4G7Q6DJiEDZNTdv/zB2/jbveqJwvAEzYiv/EirS+cjf6g02tMKmNRCEpbTFSTFqi6bFcVQCVUt6Z14MijlgcfNJxaEIbLnv4pz6mTjoUTnhNHoX9KiG0gaQBao5TCKFC2LoqoMHb+mgTyVfCkyuULrryivPNz35DhOZWA2XbICNIXCVXEVscBSpsaAFAmoI0hBIONIxDBT+ZsucgxyiL27bekDwtFEAovlF4oPZQBNk4JL7k+Z8clhrK2EVGUQGzOUAW1BoJAbPVkL9ObIBw/p27w5jskDFLpV0ZMY2yEjmJM3CBK2kSNDjZpoaMIrXQFUGRJ2pbeJrjk6QWXX+y5+ALYPq3ZNmXYvsGwY9qwbdLQ72v++YuGwwcyFJ7gHeKKuoYQ1lylSJ0YBUIIxFb0Tw5Jd10YIcnDsSBCbC06TjA2wSRNVDIBOsb6rOYBLSobocschUKRw8aCpFMymyqKVOEKhfcKERgNNcfnDYfmhYd/6LjoYoc2K+m08PjusDrEDo6sCOycVmqdAOCR4H3lkbStXJltVHk7EUQJWsckNsImTXyR4fIUm6doOyJulLjSE5wgIquNXkXqmZ5TXLBgyApFljoaG0zFKCt7BiXmwJdI8ISyJLjAo/tI1wUA1ZAHyszT6lGFwtqArhshVagiON2ABIy2aBtjbIyJYrSxuCTHO4eEULk+AREhzkuavcDkRkc+ktW/rUnA2s3jc3A5wReUeUqey6i/IAvrAsD+xfDAhhkfJHit1ApRUW9svIFBRWBbKKXRSmONQVuLLXK8q26vcv0KCZ6oKKrfBcHlBXGzUdu6UFeQDCtdYdXhXSVdac6peVn8YbFOAFgVHs0yP+/LYlZWuj/FVYZK1Ol1fGXBJCgEoxRaGbSJMd4hwa/lQSFgk7JSieAJrsQmTZTStbErQdchsa/S4uByXDrCZTn7jsgPPn5fWFoXAMKBMH+qFw5uLIrZ4MrK4HkP2lXiv8oBqlUeEFM1OClt0N6gg0dkza9L8IiNEalD5ShBR1VfoAgoX1N/3iEuJ5QFLhtRpEPSfuDgST63bnWB3/qUyL9ewD1lWlzpiwwTJYi29SZXOECpg5cxMHRNiuoSQomSullKqHKB4CupQCFGqthiRf9DRa9V0pHjsiHFaEA+TFlexhdL7j/XtTrsbPjc8mKJy1N8TXJUm6wOh/hab1faYGquT8dgkqrSYxv1E6NM3QOgVBU76LVuMAlhVS18kVKmA/JRn2w4IB84Dh/h3mxj+OG61gZ7e/w3FmbMg5PD0TNso4WxCaJ0rdL1remxTjClxujvGhAxa0CFUM9UiFpzdxICKEG8EHwFeJkOyYcj8mHOYFFxsnB/9ZefDGFdJeAFX/aZPyJ3DYcVF+iLlOBLxFedG5Uk1BKBr9thVijvmulVeo1NPiOEkSCI94RQ9QG5fEQ5GlCM+tXhRznFQFiY5zt3ftN9+ZdSHn905D/SPqZelyTDnoli4lqEVyv5ImAiCLU9WHWPYwGNhOr2gz890xuzCcE5fFlQ5hllllNkJXkaWF5SDA75d/3HQ+Gsy+NPilL6zH3h+KueF21tKX+ViQStK/1VSlU2cKWWr+T0oqbUPX7iqoOLrz+lPrQjBI+4El/klHmGy1LKLKfMSoosUCwrfnBAfeGWj6d/8VRwgk+aU7vNc285bW5IErdZaVdxA0qd1tGuRMbeFqkJDRn7DG7MCzjEl4SywBc5Ls9wWU6ZF5S5o8yEYgjHF8y+R75X3PqVA2H5lwrAxw+E9A0vVfcVJ81LtSm7CociVEzRabce1tzeyq2v/BxCbekdwRf4ssA97vCeMq0Of+qUGS0/4l732q8W3+UpGmfFqv7Dv4cj1z1dfadZ2Bdp5XpCiYQq1EUCshbtVPZgFYhQ6/rK4cvVxKnMUso0p8hLyixQZFAMYXlRs/dg+ONXfir75FPZ0nPWtPJn7/OPveAy/XWdmWstfi74CoTgXR0j+Jr4XIkA64P7WuddgS8yymxEMRqRpzlF5qpbT6EcQX/JcmJe/vzWj43ex1M8nrIXJ7/6CrtxcSq5Y+dmuXViMhC3FXHTEjUiojhGR1WDxErQU2mHx7sSl2cUaU6ROopMcHmV9JWpoj+wo6NH3Z/e+qnRBzkH4yl9c/St12p9+Wz8yq1b7Z9N9uTXG61AVAV82FijjUJpVdPhVSLkneDLQFkILlf4XFHminSkw7EF9bW79xVvf/+3sv/iHI1z8ursh14TR9OZeqGd0C+f6KrLmrHaZq1sQtGMIsAIKiiCrGS8ijxTZKnqDzO998SpcP9/Hyk/eTj1d33+/lI4h+OcvzwN8NnbGp2jKVtabdkszsxNCpNpROL6wTqnykGpliYmwsGB6H33L5QHPnx36fn/sT7jfwHHxci0BiCIbQAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </S.Welcome>
        <S.Name>
          I am Guilherme Fernandes. <br />I create things for the web.
        </S.Name>
        <S.About>
          Front-end developer from in Brazil. <br />I
          always try to write clean code and I value accessibility.
        </S.About>
        <Link to="portfolio" spy={true} smooth="easeInOutQuart" duration={1000} >
          <Button>Portfolio</Button>
        </Link>
      </S.ItemsHomeWrapper>
    </S.HomeSection>
  );
};

export default Home;
