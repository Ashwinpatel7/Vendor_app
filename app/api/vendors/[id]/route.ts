import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Vendor from '@/lib/models/Vendor'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const vendor = await Vendor.findById(params.id)
    
    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    return NextResponse.json(vendor)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch vendor' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const body = await request.json()
    
    const vendor = await Vendor.findByIdAndUpdate(params.id, body, { new: true })
    
    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    return NextResponse.json(vendor)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update vendor' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const vendor = await Vendor.findByIdAndDelete(params.id)
    
    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Vendor deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete vendor' }, { status: 500 })
  }
}