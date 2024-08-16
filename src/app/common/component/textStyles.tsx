export const SubHeader: React.FC<{text: string}> = ({text}) => {
    return (
      <h1 className="font-medium uppercase lg:text-2xl md:text-xl py-2">
        {text}
      </h1>
    )
  }