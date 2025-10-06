'use client';

import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import Button from './Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import { XMarkIcon } from '@/icons';
import { CalendarIcon, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formSchema } from '@/schema';
import { Calendar } from './ui/calendar';

const destination = [
  {
    label: 'Dalam Kota',
    value: 'dalam kota',
  },
  {
    label: 'Luar Kota',
    value: 'luar kota',
  },
];

const OrderForm = ({
  fleet,
  rentalCost,
  handleClose,
}: {
  fleet: string;
  rentalCost: { basic: number; allin: number };
  handleClose: any;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      address: '',
      destination: 'dalam kota',
      fleet: fleet,
      service: Boolean(rentalCost.basic) ? 'lepas kunci' : 'all in',
    },
  });
  const { isMobile } = useMediaQuery();
  const isLuarKotaDestination = form.watch('destination') === 'luar kota';

  function onSubmit({
    name,
    address,
    service,
    fleet,
    destination,
    datePicker,
  }: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // You can add WhatsApp integration here
    const whatsappMessage = `Halo! Saya ingin membuat pemesanan. Berikut detailnya:

Nama: ${name}
Jenis Layanan: ${service}
Unit Kendaraan: ${fleet}
Tujuan Penggunaan: ${destination}
Alamat: ${address}
Tanggal Ambil: ${format(datePicker.from, 'dd/MM/yyyy')}
Tanggal Balik: ${
      datePicker.to ? format(datePicker.to, 'dd/MM/yyyy') : 'Belum ditentukan'
    }`;

    const whatsappUrl = `https://wa.me/6285695771804?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <Form {...form}>
      <form
        id="order-form"
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.log('Form validation failed:', errors);
        })}
        className="flex flex-col space-y-3 bg-gray-100 px-2 py-6 lg:p-6 border rounded-xl"
      >
        <div className="flex items-baseline justify-between">
          <div className="w-full text-center lg:w-auto lg:text-left">
            <h1 className="text-2xl lg:text-xl">Form Pemesanan</h1>
            <p className="text-muted-foreground text-sm">
              Lengkapi informasi Anda
            </p>
          </div>
          <Button
            className="hidden lg:block"
            variant="ghost"
            onClick={handleClose}
          >
            <XMarkIcon />
          </Button>
        </div>

        {/* Nama */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-col">
                <FormLabel className="text-lg lg:text-sm">
                  Nama Lengkap
                </FormLabel>
                <FormDescription>Ketik nama lengkap anda</FormDescription>
              </div>
              <FormControl>
                <Input placeholder="Peter Parker" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Alamat */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-col">
                <FormLabel className="text-lg lg:text-sm">Alamat</FormLabel>
                <FormDescription>Ketik alamat anda</FormDescription>
              </div>
              <FormControl>
                <Input
                  placeholder="Jalan Ave Road No.17, Makassar"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Destination */}
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-lg lg:text-sm">Tujuan ke?</FormLabel>
              <FormDescription>Dalam kota atau luar kota</FormDescription>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'h-14 pl-3 text-base text-left font-semibold justify-between lg:font-normal lg:h-10 lg:text-sm',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? destination.find(
                            (place) => place.value === field.value
                          )?.label
                        : 'Pilih tujuan'}
                      <ChevronsUpDown className="mr-2 size-6 lg:size-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {destination.map((place) => (
                          <CommandItem
                            className="text-base lg:text-sm"
                            value={place.label}
                            key={place.value}
                            onSelect={() => {
                              form.setValue(
                                'destination',
                                place.value as 'dalam kota' | 'luar kota'
                              );
                            }}
                          >
                            {place.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        {/* Datepicker */}
        <FormField
          control={form.control}
          name="datePicker"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-lg lg:text-sm">
                Tanggal Berangkat
              </FormLabel>
              <FormDescription>Pilih tanggal keberangkatan</FormDescription>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'h-14 pl-3 text-base text-left font-semibold lg:text-sm lg:h-10 lg:font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value?.from && field.value?.to ? (
                        `${format(field.value.from, 'PPP')} - ${format(
                          field.value.to,
                          'PPP'
                        )}`
                      ) : (
                        <span>Klik untuk memilih tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto mr-2 size-6 lg:size-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        {/* Rental */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-col">
                <FormLabel className="text-lg lg:text-sm">
                  Rental untuk?
                </FormLabel>
                <FormDescription>Pilih salah satu</FormDescription>
              </div>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center space-x-1">
                    <FormControl>
                      <RadioGroupItem
                        disabled={!Boolean(rentalCost.basic)}
                        className="bg-white"
                        value="lepas kunci"
                      />
                    </FormControl>
                    <FormLabel
                      className={cn(
                        'text-base lg:text-sm',
                        !Boolean(rentalCost.basic) &&
                          'line-through text-muted-foreground'
                      )}
                    >
                      {`Lepas Kunci ${
                        !isLuarKotaDestination || !Boolean(rentalCost.basic)
                          ? `(IDR ${rentalCost.basic.toLocaleString()}/Hari)`
                          : '(Silahkan chat Admin)'
                      }`}
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-1">
                    <FormControl>
                      <RadioGroupItem className="bg-white" value="all in" />
                    </FormControl>
                    <FormLabel className="text-base lg:text-sm">
                      {`All-In Driver + BBM ${
                        !isLuarKotaDestination
                          ? `(IDR ${rentalCost.allin.toLocaleString()}/Hari)`
                          : '(Silahkan chat Admin)'
                      }`}
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        {!isMobile && (
          <Button
            variant="default"
            type="submit"
            className="w-fit px-4 py-2.5 mt-4 lg:mt-auto lg:w-full bg-green-600"
          >
            <Image
              src={'/icons/icon_whatsapp.webp'}
              alt="icon for whatsapp"
              width={30}
              height={30}
              className="w-5 h-auto"
            />
            <span>Rental Armada</span>
          </Button>
        )}
      </form>
    </Form>
  );
};

export default OrderForm;
