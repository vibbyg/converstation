export const SubHeader: React.FC<{text: string}> = ({text}) => {
    return (
      <h1 className="font-medium uppercase text-2xl py-2">
        {text}
      </h1>
    )
  }