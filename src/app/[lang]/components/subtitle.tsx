type Props = {
  title: string;
  className?: string;
}

export default function Subtitle({title, className}: Props) {

  return (
    <div className="flex items-baseline">
      <p className="font-hero text-4xl md:text-5xl font-bold me-2 text-teal-500">:</p>
      <h2 className={`font-hero text-3xl md:text-4xl font-bold uppercase ${className}`}>{title}</h2>
    </div>
  )
}